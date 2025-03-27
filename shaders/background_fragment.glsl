precision mediump float;

varying vec2 v_uv;
 
// The texture.
uniform float tx;
uniform float ty;
uniform float tw;
uniform float th;
uniform sampler2D texture;

uniform float color;
uniform float alpha;

void main() {

  vec2 uv = v_uv;
  
  uv.x *= tw;
  uv.x += tx;  
  uv.y *= th;
  uv.y += ty;

 if(color > -1.0) {

    vec4 rgb;
 
    rgb.b = mod(color , 256.0);
    rgb.g = mod(color / 256.0, 256.0);
    rgb.r = mod(color / 65536.0, 256.0);
    // now we have a vec3 with the 3 components in range [0..255]. Let's normalize it!
    rgb /= 255.0;
    rgb.a = alpha;
    rgb *= texture2D(texture, uv).a;

    gl_FragColor = rgb;

  } else {

    vec4 finalColor = texture2D(texture, uv);

    finalColor.a = alpha * finalColor.a;

    gl_FragColor = finalColor;

  }
  
}