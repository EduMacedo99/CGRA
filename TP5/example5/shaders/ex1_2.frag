#ifdef GL_ES
precision highp float;
#endif

varying vec4 coords;

void main() {
  vec4 color;

	if (coords.y > 0.5)
		color =  vec4(1.0, 1.0, 0.0, 1.0);
	else
	{
		color =  vec4(0.0, 0.0, 1.0, 1.0);
	}
  gl_FragColor = color;
}