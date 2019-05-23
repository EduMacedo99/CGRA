#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;

uniform sampler2D uSampler2;
uniform sampler2D uSampler;
uniform float timeFactor;

void main() {
  vec4 color_map = texture2D(uSampler2, vTextureCoord);
  
	gl_FragColor = 0.5*texture2D(uSampler, vTextureCoord) + 0.5*color_map;
}
