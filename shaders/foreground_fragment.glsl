precision mediump float;

varying vec2 v_uv;

uniform float alpha;

uniform float time;

uniform float repeatX;
uniform float repeatY;
uniform float repeatOffsetX;
uniform float repeatOffsetY;

uniform sampler2D texture;

void main() {

  vec2 uv = v_uv;

  uv.x *= repeatX;
  uv.y *= repeatY;

  uv.x += repeatOffsetX * 1.0;
  uv.y += repeatOffsetY * 1.0;

  vec4 finalColor = vec4(0.0, 0.25, 0.5, 0.0);

  vec4 tex;

  tex = texture2D(texture, uv);

  tex.a *= 0.25;

  finalColor += tex;

  uv = v_uv;

  uv.x += sin(time * 0.15) * 0.05;

  uv.x *= repeatX* 2.0;
  uv.y *= repeatY* 2.0;

  uv.x += repeatOffsetX;
  uv.y += repeatOffsetY;

  tex = texture2D(texture, uv);

  tex.a *= 0.1;

  finalColor += tex;
  // finalColor.a *= alpha;

  /*  

    float threshold = 0.1;

    finalColor.r = floor(finalColor.r / threshold) * threshold;
    finalColor.g = floor(finalColor.g / threshold) * threshold;
    finalColor.b = floor(finalColor.b / threshold) * threshold;
    finalColor.a = 0.1;

    */

  gl_FragColor = finalColor;

}