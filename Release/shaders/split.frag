uniform sampler2D texture;
uniform float dist;

void main() {
	gl_FragColor = vec4(texture2D(texture, gl_TexCoord[0].xy + vec2(-dist, 0)).r, texture2D(texture, gl_TexCoord[0].xy).g, texture2D(texture, gl_TexCoord[0].xy + vec2(dist, 0)).b, 1.0);
}