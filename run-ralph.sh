#!/bin/bash
set -e

if [ -z "$1" ]; then
  echo "Usage: $0 <iterations>"
  exit 1
fi

for ((i=1; i<=$1; i++)); do
  result=$(docker sandbox run claude --permission-mode acceptEdits -p "@roadmap.md @progress.md @guardrails.md @errors.log @activity.log \
  1. Review the list of specs in the roadmap.md file \
  2. If the next incomplete spec is planned, check if it is already written, \
  3. If it is not written, create the spec using the ralph/examples/specs/example-1 files as a guide, if you have questions on choices, make your best effort based on your research,  \
  4. If the spec is already written, implement it using the implement_spec.md file as a guide, \
  5. Update the Roadmap with the status of the spec and log what was done in activity.log \
  6. If you encounter errors that future devs will need to avoid log them in errors.log \ 
  7. Log any important interfaces for other specs in Guardrails.md \
  8. Append your progress to progress.md. Don't forget to update the roadmap.md too. \
  9. Commit your changes. \
  10. Move thorugh the phases sequentially. \
  ONLY WORK ON A SINGLE TASK. \
  If the PRD is complete, output <promise>COMPLETE</promise>.")

  echo "$result"

  if [[ "$result" == *"<promise>COMPLETE</promise>"* ]]; then
    echo "PRD complete after $i iterations."
    exit 0
  fi
done