import should from 'should/as-function';
import 'should-approximately-deep';
import Feature from 'ol/feature';
import LineString from 'ol/geom/linestring';
import pointsAlongLine from '../pointsalongline';

describe('pointsAlongLine', function() {
  it('adds correct points along a line', function() {
    var line = new Feature(new LineString([[0, 0], [0.1, 0.1]]));
    var points = pointsAlongLine(line, 1);
    should(points).have.length(15);
    var firstCoordinate = points[0].getGeometry().getCoordinates();
    should(firstCoordinate).be.approximatelyDeep([0.0063, 0.0063], 1e-4);
  });
});
