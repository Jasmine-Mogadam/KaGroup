// ShapeTypes.ts
export enum ShapeTypes {
  TRIANGLE = 'Triangle',
  SQUARE = 'Square',
  PENTAGON = 'Pentagon',
  OCTAGON = 'Octagon',
  TRAPEZOID = 'Trapezoid',
  ARROW_BLOCK = 'ArrowBlock',
  PARALLELOGRAM = 'Parallelogram',
  HEXAGON = 'Hexagon',
  RECTANGLE = 'Rectangle'
}

export enum ShapeColors {
  RED = '#f76c5e',
  ORANGE = '#f68e5f',
  YELLOW = '#f5dd90',
  BLUE = '#586ba4',
  DARK_BLUE = '#324376'
}

export function getShapePoints(shapeType: ShapeTypes): string {
  switch (shapeType) {
    case ShapeTypes.TRIANGLE:
      return '50,0 100,100 0,100'
    case ShapeTypes.SQUARE:
      return '0,0 100,0 100,100 0,100'
    case ShapeTypes.PENTAGON:
      return '50,0 100,50 50,100 0,50'
    case ShapeTypes.OCTAGON:
      return '50,0 100,0 100,100 50,100 0,100 0,0'
    case ShapeTypes.TRAPEZOID:
      return '0,0 100,0 150,50 0,100' // Example points, adjust as needed
    case ShapeTypes.ARROW_BLOCK:
      return '0,0 100,0 100,100 0,100' // Example points, adjust as needed
    case ShapeTypes.PARALLELOGRAM:
      return '0,0 100,0 150,50 0,50' // Example points, adjust as needed
    case ShapeTypes.HEXAGON:
      return '50,0 100,30 100,70 50,100 0,70 0,30' // Example points, adjust as needed
    case ShapeTypes.RECTANGLE:
      return '0,0 100,0 100,100 0,100'
    default:
      return '' // Return an empty string or a default shape if the shapeType is not recognized
  }
}
