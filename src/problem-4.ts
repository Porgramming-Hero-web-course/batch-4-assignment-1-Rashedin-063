// problem 4

type Circle = { shape: 'circle'; radius: number };
type Rectangle = { shape: 'rectangle'; width: number; height: number };

function calculateShapeArea(newShape: Circle | Rectangle): number | undefined {
  if (newShape.shape === 'circle') {
    return Math.PI * Math.pow(newShape.radius, 2);
  } else if (newShape.shape === 'rectangle') {
    return newShape.width * newShape.height;
  } else return undefined;
}
