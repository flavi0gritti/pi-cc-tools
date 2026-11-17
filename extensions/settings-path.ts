import { homedir } from "node:os";
import { join } from "node:path";

/** pi's agent settings file: `$PI_CODING_AGENT_DIR/settings.json` (default `~/.pi/agent/settings.json`). */
export function getUserSettingsPath(): string {
	const agentDir = process.env.PI_CODING_AGENT_DIR || join(homedir(), ".pi", "agent");
	return join(agentDir, "settings.json").replaceAll("\\", "/");
}

/** Pre-agent settings location, still read as a lowest-priority fallback. */
export function getLegacyUserSettingsPath(): string {
	return join(homedir(), ".pi", "settings.json").replaceAll("\\", "/");
}
