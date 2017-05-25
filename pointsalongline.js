import along from '@turf/along';
import GeoJSON from 'ol/format/geojson';
import lineDistance from '@turf/line-distance';

var format = new GeoJSON();

export default function(line, distance) {
  var turfLine = format.writeFeatureObject(line);
  var length = lineDistance(turfLine, 'kilometers');
  var points = [];
  for (var i = 1, ii = length / distance; i <= ii; ++i) {
    var turfPoint = along(turfLine, i * distance, 'kilometers');
    var point = format.readFeature(turfPoint);
    points.push(point);
  }
  return points;
}
