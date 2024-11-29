import { python, javascript } from '@codemirror/lang-python';
import { CodeMirror } from '@uiw/react-codemirror';

<CodeMirror
  value={code}
  height="300px"
  theme="dark"
  extensions={[python()]} // or javascript() for JavaScript mode
  onChange={(value) => setCode(value)}
/>
