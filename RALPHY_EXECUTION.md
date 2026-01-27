# Ralphy Continuous Execution Guide

This project uses a **Hybrid approach**: GSD plans all phases, then Ralphy executes them continuously.

## Quick Start

Run all 20 phases continuously:

```powershell
# Windows
.\run-ralphy-all-phases.ps1

# Or directly:
ralphy --yaml .ralphy/tasks.yaml --max-iterations 0 --max-retries 3 --verbose
```

## How It Works

### 1. GSD Planning Phase (✅ Complete)
- All 20 phases have been planned using GSD methodology
- Each phase has a detailed `XX-PLAN.md` file with:
  - Tasks with specific actions
  - Verification steps
  - Success criteria
  - Dependencies

### 2. Ralphy Execution Phase
- Ralphy reads the `tasks.yaml` file which lists all 20 phases
- For each phase, Ralphy:
  1. Reads the phase's `PLAN.md` file
  2. Executes all tasks in the plan
  3. Creates atomic commits (one per task)
  4. Generates `XX-SUMMARY.md` after completion
  5. Updates `.planning/STATE.md`
  6. Moves to the next phase automatically

## Execution Flow

```
Phase 01 → Phase 02 → Phase 03 → ... → Phase 20
   ↓          ↓          ↓                  ↓
PLAN.md   PLAN.md   PLAN.md            PLAN.md
   ↓          ↓          ↓                  ↓
Tasks →   Tasks →   Tasks →            Tasks →
   ↓          ↓          ↓                  ↓
Commits   Commits   Commits            Commits
   ↓          ↓          ↓                  ↓
SUMMARY  SUMMARY  SUMMARY             SUMMARY
```

## Continuous Execution

Ralphy is configured to:
- **Run all phases** without stopping (`--max-iterations 0`)
- **Retry failed tasks** up to 3 times (`--max-retries 3`)
- **Follow GSD patterns** (atomic commits, checkpoints, summaries)
- **Handle dependencies** automatically (phases wait for dependencies)

## Checkpoint Handling

Some phases have checkpoint tasks that require human interaction:

| Phase | Checkpoint Type | What You Need to Do |
|-------|----------------|---------------------|
| 17 | human-verify | Test with screen readers, browsers, mobile devices |
| 18 | human-action | Provide personal content, pricing, testimonials |
| 19 | human-action | Set up Calendly, Stripe, Google Business Profile |
| 20 | human-verify | Deploy to production and verify live site |

**When Ralphy hits a checkpoint:**
1. It will pause and display what needs to be done
2. Complete the required action
3. Verify it worked
4. Tell Ralphy to continue

## Monitoring Progress

### During Execution
- Watch the terminal output for progress
- Check `.ralphy/progress.txt` for Ralphy's internal tracking
- Check git log for commits: `git log --oneline`

### After Each Phase
- Check `.planning/phases/XX-name/XX-SUMMARY.md` for what was done
- Check `.planning/STATE.md` for updated project status
- Review git commits for that phase

### Phase Completion Indicators
- ✅ `XX-SUMMARY.md` file exists in phase directory
- ✅ `.planning/STATE.md` updated with phase completion
- ✅ All tasks in `XX-PLAN.md` have corresponding commits

## Stopping and Resuming

### To Stop
- Press `Ctrl+C` - Ralphy will save progress gracefully

### To Resume
- Run the same command again
- Ralphy will continue from where it stopped
- It checks completed phases and skips them

## Troubleshooting

### Phase Fails
1. Check the error message in terminal
2. Review the phase's `PLAN.md` to understand what should happen
3. Check `XX-SUMMARY.md` for details on what was attempted
4. Fix the issue manually if needed
5. Resume execution

### Stuck at Checkpoint
1. Read what Ralphy is asking for
2. Complete the required action
3. Verify it worked (run the verification command if provided)
4. Confirm to Ralphy to continue

### Unexpected Stop
1. Check `.planning/STATE.md` for current status
2. Check git log to see what was completed
3. Review the last phase's `SUMMARY.md`
4. Resume with the same command

## Configuration Files

- `.ralphy/config.yaml` - Ralphy configuration with GSD execution rules
- `.ralphy/tasks.yaml` - Task file with all 20 phases
- `.planning/STATE.md` - Project state (updated after each phase)
- `.planning/phases/XX-name/XX-PLAN.md` - Phase execution plans

## Expected Timeline

With continuous execution, all 20 phases should complete in one session:
- **Autonomous phases** (01-16): Run automatically without stopping
- **Checkpoint phases** (17-20): Pause for your input, then continue
- **Total time**: Depends on complexity, but designed to run continuously

## Success Criteria

All phases complete when:
- ✅ All 20 `XX-SUMMARY.md` files exist
- ✅ `.planning/STATE.md` shows Phase 20 complete
- ✅ Website is deployed and functional (Phase 20)
- ✅ All git commits are atomic (one per task)

## Next Steps After Completion

1. Review all phase summaries
2. Test the live website
3. Verify all features work
4. Complete any remaining manual setup (accounts, etc.)
5. Launch! 🚀
