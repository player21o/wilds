precision mediump float;

varying vec2 v_uv;
varying vec2 v_position;

uniform float radius;
uniform sampler2D texture;

uniform vec2 light;


void main() {

  vec4 rgb;

  float d = distance(v_position, vec2(0.5, 0.5)) / 0.5;
  
  if (d < 0.8) gl_FragColor = vec4(0.79, 0.85, 0.98, 1.0);
  else if (d < 0.86) gl_FragColor = vec4(0.38, 0.60, 1.00, 1.0);
  else if (d < 1.0) gl_FragColor = vec4(0.25, 0.33, 0.78, 1.0); 

}