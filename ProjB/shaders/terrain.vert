#ifdef GL_ES
precision highp float;
#endif

attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;
uniform float normScale;
uniform sampler2D uSampler3;

varying vec2 vTextureCoord;

void main() {
	vTextureCoord = aTextureCoord;

  float color = texture2D(uSampler3, vTextureCoord).r;

	vec3 offset = 0.005*aVertexNormal*normScale*vec3(0.0, 0.0, color);	

	gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition+offset, 1.0);
}
