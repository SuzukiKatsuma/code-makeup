const FONT_SIZE = 16;
const FONT_HEIGHT = FONT_SIZE + 4;

function breakCount(code: string): number {

  const array = code.match(/\n/g);
  if (array === null) return 1;

  return array.length;
}

export default function svgGenerator(code: string, color: string): string {

  const innerCode: string = `${code.replace(/\\h/g, '&#35;').replace(/\\amp/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\\t/g, '  ').replace(/\\n/g, '\n')}`;
  const fillColor: string = `#${color}`;

  const br: number = breakCount(innerCode);


  const svg = `
  <svg width="820" height="${FONT_HEIGHT * br + 150}" viewBox="0 0 820 ${FONT_HEIGHT * br + 150}" fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>
      .code-space { fill: #272822; filter: drop-shadow(0 0 ${FONT_SIZE}px rgba(51, 54, 49, 0.6)); }
      .code { font: ${FONT_SIZE}px; font-family: Consolas; color: #f8f4e6; height: ${FONT_HEIGHT}px; margin: 0; }
    </style>
    <rect width="820" height="${FONT_HEIGHT * br + 150}" rx="10" ry="10" fill="${fillColor}"/>
    <rect class="code-space" x="50" y="50" width="720" height="${FONT_HEIGHT * br + 40}" rx="5" ry="5"/>
    <foreignObject x="70" y="70" width="650" height="${FONT_HEIGHT * br + 40}">
      <div xmlns="http://www.w3.org/1999/xhtml">
        <pre style="margin: 0;"><code class="code">${innerCode}</code></pre>
      </div>
    </foreignObject>
  </svg>
  `;

  return svg;
}
