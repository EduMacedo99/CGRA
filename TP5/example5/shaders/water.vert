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
uniform sampler2D uSampler2;

varying vec2 vTextureCoord;

void main() {
	vTextureCoord = aTextureCoord;

	vec3 offset = 0.005*aVertexNormal*normScale*length(texture2D(uSampler2, vTextureCoord+vec2(timeFactor*.01,timeFactor*.01)));	

	gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition+offset, 1.0);
}
