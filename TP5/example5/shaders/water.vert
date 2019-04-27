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
uniform float timeFactor;
uniform sampler2D uSampler3;

varying vec2 vTextureCoord;

void main() {
	vTextureCoord = aTextureCoord;

  float color = texture2D(uSampler3, mod((vTextureCoord+vec2(timeFactor*.005,timeFactor*.005))/2.0, vec2(1.0, 1.0)) ).r;

	vec3 offset = 0.005*aVertexNormal*normScale*vec3(0.0, 0.0, color);	

	gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition+offset, 1.0);
}
