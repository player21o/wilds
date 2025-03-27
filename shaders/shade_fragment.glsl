precision mediump float;

varying vec2 v_uv;

// The texture.
uniform float tx;
uniform float ty;
uniform float tw;
uniform float th;

uniform float alpha;
uniform float creation;

uniform float palette;

uniform sampler2D texture;
uniform sampler2D paletteTexture;

uniform vec4 color;

float rand(vec2 co) {

  return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);

}

void main() {

  vec2 uv = v_uv;

  uv.x *= tw;
  uv.x += tx;
  uv.y *= th;
  uv.y += ty;

  vec4 rgba = texture2D(texture, uv);

  if(rgba.r > 0.9) discard;

  rgba.r = 0.0;
  rgba.g = 0.0;
  rgba.b = 0.0;

  rgba.a *= alpha;

  float a = rgba.a;

  rgba = mix(rgba, color, color.a);
  rgba.a = a;

  gl_FragColor = rgba;

}