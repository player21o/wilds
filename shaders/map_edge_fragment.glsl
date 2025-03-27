precision mediump float;

varying vec2 v_uv;
 
// The texture.
uniform float repeatX;
uniform float repeatY;
uniform float repeatOffsetX;
uniform float repeatOffsetY;

uniform bool flip;

uniform float time;

uniform sampler2D texture;


void main() {

  vec2 uv = v_uv;

  if(flip) uv.x = 1.0  - uv.x;
  
  uv.y *= repeatY;
  uv.y += repeatOffsetY;

  uv.y += uv.x * sin(time * 2.0 + uv.x * 10.0 + uv.y * 20.0 ) * 0.02;


  vec4 finalColor = texture2D(texture, uv);

  /*  

    float threshold = 0.1;

    finalColor.r = floor(finalColor.r / threshold) * threshold;
    finalColor.g = floor(finalColor.g / threshold) * threshold;
    finalColor.b = floor(finalColor.b / threshold) * threshold;
    finalColor.a = 0.1;

  */

  gl_FragColor = finalColor;

}