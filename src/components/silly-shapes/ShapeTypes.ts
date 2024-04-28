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
  CRYSTAL = 'Crystal'
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
      return '54.75,48.5 53,54 47,54 45.25,48.5 50,45'
    case ShapeTypes.OCTAGON:
      return '96.19397662556435,69.13417161825448 69.1341716182545,96.19397662556435 30.865828381745512,96.19397662556435 3.806023374435661,69.1341716182545 3.806023374435661,30.865828381745516 30.865828381745484,3.806023374435675 69.1341716182545,3.806023374435668 96.19397662556432,30.86582838174548'
    case ShapeTypes.TRAPEZOID:
      return '0,10 50,0 50,100 0,90'
    case ShapeTypes.ARROW_BLOCK:
      return '0,50 100,-200 100,0 85,50 200,500 100,300'
    case ShapeTypes.PARALLELOGRAM:
      return '50,0 100,50 50,100 0,50'
    case ShapeTypes.HEXAGON:
      return '54.75,48.5 53.75,53.25 49,55 45.25,51.5 46.25,46.75 51,45'
    case ShapeTypes.CRYSTAL:
      return '0,50 75,-200 75,0 85,50 25,350 75,300'
    default:
      return '' // Return an empty string or a default shape if the shapeType is not recognized
  }
}
