interface Rect {
    readonly id: string;
    color?: string;
    size: {
        width: number
        heigth: number
    }
}
const rect1: Rect = {
    id: '1234',
    size: {
        width: 20,
        heigth: 30
    }
    color: '#ccc'
}

const rect2: Rect = {
    id: '12345',
    size: {
        width: 10, 
        heigth: 5
    }
} 
rect2.color = 'black'

const rect = {} as Rect
const rect4 = <Rect>{}

// =============

interface RectWithArea extends Rect {
    getArea: () => number
}
const rect5: ReactWithArea = {
    id : '123'
    getArea(): number {
        return this.size.width * this.size.heigth
    }
}