varying vec3 vPosition;
flat varying vec2 vUv;

void main () {
    gl_FragColor = vec4(vUv.xxx, 1.0);
}