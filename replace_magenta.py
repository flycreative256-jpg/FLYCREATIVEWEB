import os
import re

directories = ['components', 'sections', 'app', 'data']

replacements = [
    (r'\[var\(--brand-magenta\)\]', r'white'),
    (r'purple-400', r'slate-300'),
    (r'purple-500', r'white'),
]

for d in directories:
    for root, dirs, files in os.walk(d):
        for file in files:
            if file.endswith(('.tsx', '.ts')):
                path = os.path.join(root, file)
                with open(path, 'r') as f:
                    content = f.read()
                
                new_content = content
                for old, new in replacements:
                    new_content = re.sub(old, new, new_content)
                
                if content != new_content:
                    with open(path, 'w') as f:
                        f.write(new_content)
                    print(f"Updated {path}")
