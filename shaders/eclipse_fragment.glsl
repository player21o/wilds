precision mediump float;

varying vec2 v_uv;

uniform vec4 color;

uniform float aspect;
uniform float radius;
uniform float alpha;
uniform float t;
uniform float offsetX;
uniform float offsetY;

float atan2(float y, float x) {

    float s = abs(x) > abs(y) ? 1.0 : 0.0;
    float result = mix(3.141 / 2.0 - atan(x, y), atan(y, x), s);

    if (result < 0.0) return 6.282 + result;
    else return result;

}

float loop(float num, float max) {

    if (num < 0.0) num = max + num;
    else num = mod(num, max);

    return num;

}

void main() {

    vec2 uv = v_uv;

    uv.x += offsetX;   
    uv.y += offsetY;

    uv.x -= 0.5;
    uv.y -= 0.5;

    uv.y *= aspect;

    float dist = sqrt(dot(uv, uv));

    float angle = atan2(uv.x, uv.y) / 6.282;

    angle += t * 0.1;

    float r = cos(t * 4.0) * sin(angle * 6.28 * ceil(radius * 10.0)) * 0.01;
    float a = 1.0;

    if(dist + r < 0.4 * radius) discard;
    if(dist + r < 0.5 * radius) {
        a = (dist + r - 0.4 * radius) / (0.1 * radius);
        a = floor(a * 10.0) * 0.1;
    };


    gl_FragColor = vec4(0.0, 0.0, 0.0, a * alpha);

}