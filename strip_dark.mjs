import fs from 'fs';
import path from 'path';

const dir = 'D:/Trinno/Project-Alphono_34/src/pages';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

let totalRemoved = 0;
const touched = [];

for (const f of files) {
  const fp = path.join(dir, f);
  const orig = fs.readFileSync(fp, 'utf8');
  const before = (orig.match(/dark:/g) || []).length;
  if (before === 0) continue;

  let out = orig;

  // Pass 1: normalize whitespace ONLY within strings/templates that contain `dark:` tokens.
  // For each className="..." attribute that contains dark:, strip dark:* tokens and collapse whitespace.
  out = out.replace(/className="([^"]*)"/g, (m, inner) => {
    if (!inner.includes('dark:')) return m;
    const stripped = inner.replace(/\bdark:[^\s"'`}<>]+/g, '');
    const cleaned = stripped.replace(/\s+/g, ' ').trim();
    return `className="${cleaned}"`;
  });

  // For template literals containing dark: — strip dark tokens and collapse runs of spaces (preserve newlines).
  out = out.replace(/`([^`]*)`/gs, (m, inner) => {
    if (!inner.includes('dark:')) return m;
    const stripped = inner.replace(/\bdark:[^\s"'`}<>]+/g, '');
    // Collapse runs of 2+ spaces to 1 (don't touch newlines/tabs)
    const cleaned = stripped.replace(/ {2,}/g, ' ');
    return '`' + cleaned + '`';
  });

  // For single-quoted strings containing dark: — these are likely class strings inside ternaries/arrays.
  out = out.replace(/'([^'\n]*)'/g, (m, inner) => {
    if (!inner.includes('dark:')) return m;
    const stripped = inner.replace(/\bdark:[^\s"'`}<>]+/g, '');
    const cleaned = stripped.replace(/\s+/g, ' ').trim();
    return `'${cleaned}'`;
  });

  // Sanity: remove any remaining stray dark: tokens that escaped (shouldn't happen but safety net).
  out = out.replace(/\bdark:[^\s"'`}<>]+/g, '');

  if (out !== orig) {
    fs.writeFileSync(fp, out, 'utf8');
    const after = (out.match(/dark:/g) || []).length;
    totalRemoved += (before - after);
    touched.push({ file: f, removed: before - after, remaining: after });
  }
}

console.log('TOTAL REMOVED:', totalRemoved);
console.log(JSON.stringify(touched, null, 2));
