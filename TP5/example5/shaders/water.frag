#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;

uniform sampler2D uSampler3;
uniform sampler2D uSampler2;
uniform float timeFactor;

void main() {
  float color_map = texture2D(uSampler3, mod( (vTextureCoord + vec2(timeFactor*.005, timeFactor*.005)) / 2.0, vec2(1.0, 1.0)) ).r;
	gl_FragColor = texture2D(uSampler2, mod(vTextureCoord + vec2(timeFactor*.005, timeFactor*.005), vec2(1.0, 1.0))) - vec4(0.2*color_map, 0.2*color_map, 0.2*color_map, 0.0);
}
