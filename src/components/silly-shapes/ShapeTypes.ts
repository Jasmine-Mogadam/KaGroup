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
      return '96.19397662556435,69.13417161825448 69.1341716182545,96.19397662556435 30.865828381745512,96.19397662556435 3.806023374435661,69.1341716182545 3.806023374435661,30.865828381745516 30.865828381745484,3.806023374435675 69.1341716182545,3.806023374435668 96.19397662556432,30.86582838174548'
    case ShapeTypes.TRAPEZOID:
      return '0,10 50,0 50,100 0,90'
    case ShapeTypes.ARROW_BLOCK:
      return '0,0 100,0 100,100 0,100'
    case ShapeTypes.PARALLELOGRAM:
      return '50,0 100,50 50,100 0,50'
    case ShapeTypes.HEXAGON:
      return '50,0 100,30 100,70 50,100 0,70 0,30'
    case ShapeTypes.RECTANGLE:
      return '0,0 100,0 100,100 0,100'
    default:
      return '' // Return an empty string or a default shape if the shapeType is not recognized
  }
}
