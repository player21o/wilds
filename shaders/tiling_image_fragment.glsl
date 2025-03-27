precision highp float;

varying vec2 v_uv;
 
uniform float alpha;

uniform float repeatX;
uniform float repeatY;
uniform float repeatOffsetX;
uniform float repeatOffsetY;

uniform vec4 color;

uniform sampler2D texture;

void main() {

  vec2 uv = v_uv;
  
  uv.x *= repeatX;
  uv.y *= repeatY;

  uv.x += repeatOffsetX;
  uv.y += repeatOffsetY;

  vec4 finalColor = texture2D(texture, uv);

  finalColor.a *= alpha;

/*  

  float threshold = 0.1;

  finalColor.r = floor(finalColor.r / threshold) * threshold;
  finalColor.g = floor(finalColor.g / threshold) * threshold;
  finalColor.b = floor(finalColor.b / threshold) * threshold;
  finalColor.a = 0.1;

  */

  gl_FragColor = finalColor;

}