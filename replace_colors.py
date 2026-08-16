import os
import re

directories = ['components', 'sections', 'app', 'data']

replacements = [
    (r'cyan-500/10', r'[var(--brand-orange)]/10'),
    (r'cyan-500/15', r'[var(--brand-orange)]/15'),
    (r'cyan-500/20', r'[var(--brand-orange)]/20'),
    (r'cyan-500/25', r'[var(--brand-orange)]/25'),
    (r'cyan-500/30', r'[var(--brand-orange)]/30'),
    (r'cyan-500/40', r'[var(--brand-orange)]/40'),
    (r'cyan-500/50', r'[var(--brand-orange)]/50'),
    (r'cyan-500/5', r'[var(--brand-orange)]/5'),
    (r'cyan-500', r'[var(--brand-orange)]'),
    (r'cyan-400', r'[var(--brand-yellow)]'),
    (r'cyan-300', r'[var(--brand-yellow)]'),
    (r'cyan-950/30', r'orange-950/30'),
    (r'cyan-950', r'orange-950'),
    (r'purple-600/20', r'[var(--brand-magenta)]/20'),
    (r'purple-600', r'[var(--brand-magenta)]'),
    (r'purple-500/10', r'[var(--brand-magenta)]/10'),
    (r'purple-500/30', r'[var(--brand-magenta)]/30'),
    (r'purple-500', r'[var(--brand-magenta)]'),
    (r'orange-500/10', r'[var(--brand-orange)]/10'),
    (r'orange-500/20', r'[var(--brand-orange)]/20'),
    (r'orange-500/30', r'[var(--brand-orange)]/30'),
    (r'orange-500', r'[var(--brand-orange)]'),
    (r'orange-400', r'[var(--brand-yellow)]'),
    (r'from-cyan-500', r'from-[var(--brand-yellow)]'),
    (r'via-purple-500', r'via-[var(--brand-orange)]'),
    (r'to-orange-500', r'to-[var(--brand-magenta)]'),
    (r'rgba\(0,240,255,', r'rgba(243,121,54,'),
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
