import { _decorator, Component, Graphics, Color, v2 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GraphicsFill')
export class GraphicsFill extends Component {
    @property(Graphics) graphics: Graphics;

    start() {
        this.fillCircle();
        this.fillStar(150, 100, 100, 40);
        // 圆角矩形
        this.fillRoundRect();
        this.fillOpacity();
        // 雷达图
        this.drawRadarChart();
    }

    fillCircle() {
        // 描边圆
        this.graphics.fillColor = Color.YELLOW;
        this.graphics.circle(-280, 180, 50);
        this.graphics.fill();
        this.graphics.strokeColor = Color.BLUE;
        this.graphics.lineWidth = 8;
        this.graphics.stroke();
    }

    fillRoundRect() {
        this.graphics.fillColor = Color.GREEN;
        this.graphics.roundRect(-280, -50, 150, 80, 20);
        this.graphics.fill();
    }

    fillOpacity() {
        for (let i = 0; i < 10; i++) {
            this.graphics.fillColor = new Color(255, 120, 100, i * 25);
            this.graphics.rect(-350 + i * 30, -200, 30, 40);
            this.graphics.fill();
        }
    }

    // 起始角度 -18 为正五角星
    fillStar(x: number, y: number, r: number, cr: number, startAngle: number = -18) {
        this.graphics.fillColor = Color.YELLOW;
        this.graphics.strokeColor = Color.RED;
        this.graphics.lineWidth = 5;
        for (let i = 0; i < 5; i++) {
            if (i === 0) {
                // 首次要 moveTo
                this.graphics.moveTo(
                    Math.cos(this.degreesToRadians(startAngle)) * r + x,
                    -Math.sin(this.degreesToRadians(startAngle)) * r + y
                );
            } else {
                this.graphics.lineTo(
                    Math.cos(this.degreesToRadians(startAngle + i * 72)) * r + x,
                    -Math.sin(this.degreesToRadians(startAngle + i * 72)) * r + y
                );
            }
            this.graphics.lineTo(
                Math.cos(this.degreesToRadians(startAngle + 36 + i * 72)) * cr + x,
                -Math.sin(this.degreesToRadians(startAngle + 36 + i * 72)) * cr + y
            );
        }
        // 最后再连接至起始点
        this.graphics.close();
        this.graphics.fill();
        this.graphics.stroke();
    }

    drawRadarChart() {
        // 绘制底图
        this.graphics.fillColor = new Color(87, 87, 87, 120);
        this.graphics.strokeColor = new Color(187, 187, 187, 220);
        this.graphics.lineWidth = 2;

        const center = v2(200, -150);

        const getPosByIndex = (index: number, length: number) => {
            const startAngle = 18;
            const radian = this.degreesToRadians(startAngle + index * 72);
            const pos = v2(length * Math.cos(radian) + center.x, length * Math.sin(radian) + center.y);
            return pos;
        }

        const getPointsByLength = (length: number) => {
            const points = [];
            for (let j = 0; j < 5; j++) {
                points.push(getPosByIndex(j, length));
            }
            return points;
        }
        
        const points = getPointsByLength(120);
        this.graphics.moveTo(points[0].x, points[0].y);
        for (let j = 1; j < points.length; j++) {
            this.graphics.lineTo(points[j].x, points[j].y);
        }
        this.graphics.close();
        // 填充包围区域
        this.graphics.fill();
        this.graphics.stroke();
        // 画放射的 5 根线
        for (let j = 0; j < points.length; j++) {
            this.graphics.moveTo(center.x, center.y);
            this.graphics.lineTo(points[j].x, points[j].y);
        }
        this.graphics.stroke();

        // 数据可以有多份，每个数据中的值有 5 个
        const datas = [
            {
                values: [110, 50, 10, 30, 70],
                lineColor: new Color(103, 248, 114, 200),
                fillColor: new Color(255, 10, 10, 80)
            },
            {
                values: [20, 40, 40, 100, 30],
                lineColor: new Color(248, 40, 100, 200),
                fillColor: new Color(10, 10, 250, 80)
            }
        ];

        // 绘制数据
        for (let i = 0; i < datas.length; i++) {
            const data = datas[i];
            this.graphics.strokeColor = data.lineColor;
            this.graphics.fillColor = data.fillColor;

            const points = [];
            // 绘制数据节点
            for (let j = 0; j < 5; j++) {
                const value = data.values[j];
                const pos = getPosByIndex(j, value);
                points.push(pos);
            }

            this.graphics.moveTo(points[0].x, points[0].y);
            for (let j = 1; j < points.length; j++) {
                this.graphics.lineTo(points[j].x, points[j].y);
            }
            this.graphics.close();
            this.graphics.fill();
            this.graphics.stroke();
        }
    }

    degreesToRadians(angle: number) {
        return angle / 180 * Math.PI;
    }
}