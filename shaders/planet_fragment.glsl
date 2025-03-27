precision mediump float;

varying vec2 v_uv;
varying vec2 v_position;

uniform float radius;
uniform float spin;
uniform sampler2D texture;

uniform float color;
uniform float alpha;
uniform vec2 light;

void main() {

  vec4 rgb;

  rgb.b = mod(color, 256.0);
  rgb.g = mod(color / 256.0, 256.0);
  rgb.r = mod(color / 65536.0, 256.0);
  rgb /= 255.0;
  rgb.a = 1.0;


  vec2 p = -1.0 + 2.0 * v_uv.xy;
  float r = sqrt(dot(p, p));
  vec2 uv;
  float f = (1.0 - sqrt(1.0 - r)) / (r);
  uv.x = 0.5 * p.x * f;
  uv.y = 0.5 * p.y * f;
  rgb = texture2D(texture, uv);

    // float l = 1.0 - distance(v_position, vec2(0.25, 0.25)) / 0.75;
  float l = 1.0 - distance(v_position, vec2(0.25, 0.25)) / 0.75;
  float d = distance(v_position, vec2(0.5, 0.5)) / 0.5;

  if (l < 0.1) l = 0.5;
  else if (l < 0.2) l = 0.7;
  else l = 1.0;

  if (d > 1.0) l -= 0.25;

  rgb.r *= l;
  rgb.g *= l;
  rgb.b *= l;

  gl_FragColor = rgb;

}