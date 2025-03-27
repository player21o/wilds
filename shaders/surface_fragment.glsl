precision mediump float;

varying vec2 v_uv;

uniform float time;

uniform float color;

void main() {

  vec4 rgb;

  float x = v_uv.x;
  float y = 1.0 - v_uv.y;

  rgb.b = mod(color, 256.0) / 255.0;
  rgb.g = mod(color / 256.0, 256.0) / 255.0;
  rgb.r = mod(color / 65536.0, 256.0) / 255.0;

  float mtime = (time) * 1.5;

  float inv = sin(x * 80.0 + mtime * 4.0);

  float top = (inv * sin((x) * 40.0) + 4.0) / 5.0;
  float bottom = (inv * sin((x) * 40.0) + 0.5) / 5.0;


  rgb += sin(y * 2.0 + x * 30.0) * 0.1;


  rgb.a = 0.0;

  if (y >= bottom && y <= top) rgb.a = 1.0;



  gl_FragColor = rgb;

}