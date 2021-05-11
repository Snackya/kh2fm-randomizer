import { Enemy, EnemyType } from "../enemies/Enemy";
import { bosses, enemies, enemiesMap } from "../enemyLocations";
import { earlyLionDashPC } from "../patches/earlyLionDash";
import { expMultiplier } from "../patches/expMultiplier";
import { fasterOogiePC } from "../patches/fasterOogie";
import { fasterPresentsPC } from "../patches/fasterPresents";
import { fastHyenasTwoPC } from "../patches/fastHyenasTwo";
import { formEXPPatch } from "../patches/formEXP";
import {
	formKeybladesAbilities,
	formKeybladesStats,
} from "../patches/formKeyblades";
import { inGameSettings } from "../patches/inGameSettings";
import { levelOneEXP } from "../patches/levelOneEXP";
import { partyMemberActionAbilities } from "../patches/partyMemberActionAbilities";
import { removeGrowthAbilitiesPC } from "../patches/removeGrowthAbilities";
import { removeLevel99Abilities } from "../patches/removeLevel99Abilities";
import { shorterDay5PC } from "../patches/shorterDay5";
import { skipDragonPC } from "../patches/skipDragon";
import { Seed } from "../seed/Seed";
import { Configuration } from "../settings/Configuration";
import {
	Leveling,
	Multiplier,
	RandomizingAction,
	Toggle,
} from "../settings/enums";
import { createLine } from "./createLine";
import { shuffle } from "./shuffle";

export const createLua = (seed: Seed, configuration: Configuration) => {
	const patches: string[] = [`// ${configuration.name}`];

	if (configuration.gameMode.goa.shorterDay5 === Toggle.ON) {
		patches.push(shorterDay5PC);
	}

	if (configuration.gameMode.goa.fasterOogie === Toggle.ON) {
		patches.push(fasterOogiePC);
	}

	if (configuration.gameMode.goa.fasterPresents === Toggle.ON) {
		patches.push(fasterPresentsPC);
	}

	if (configuration.gameMode.goa.earlyLionDash === Toggle.ON) {
		patches.push(earlyLionDashPC);
	}

	if (configuration.gameMode.goa.fastHyenasTwo === Toggle.ON) {
		patches.push(fastHyenasTwoPC);
	}

	if (configuration.gameMode.goa.skipDragon === Toggle.ON) {
		patches.push(skipDragonPC);
	}

	if (configuration.settings.leveling === Leveling.LEVEL_ONE) {
		patches.push(levelOneEXP);
	}

	if (configuration.settings.leveling === Leveling.LEVEL_FIFTY) {
		patches.push(removeLevel99Abilities);
	}

	if (configuration.include.growthAbilities !== RandomizingAction.VANILLA) {
		patches.push(removeGrowthAbilities);
	}

	if (configuration.include.maxGrowthAbilities === Toggle.ON) {
		patches.push(removeMaxGrowthAbilities);
	}

	if (configuration.settings.keybladeStats === RandomizingAction.VANILLA) {
		patches.push(formKeybladesStats);
	}

	if (configuration.include.keybladeAbilities === RandomizingAction.VANILLA) {
		patches.push(formKeybladesAbilities);
	}

	if (configuration.settings.expMultiplier !== Multiplier.ONE) {
		patches.push(...expMultiplier(configuration));
	}

	patches.push(formEXPPatch(configuration));

	patches.push(inGameSettings(configuration));

	patches.push(...partyMemberActionAbilities(seed));

	if (
		configuration.experimental.enemies === Toggle.ON ||
		configuration.experimental.bosses === Toggle.ON
	) {
		const shuffledEnemies = [
			...shuffle<Enemy>([...enemiesMap.values()], configuration.name),
		];
		const enemySeed = new Map<string, Enemy>();
		for (const enemy of enemiesMap.values()) {
			enemySeed.set(enemy.value, shuffledEnemies.shift()!);
		}

		if (configuration.experimental.enemies === Toggle.ON) {
			for (const location of enemies) {
				const one = `patch=1,EE,E0${(location.enemies.length + 3)
					.toString(16)
					.padStart(2, "0")
					.toUpperCase()}${location.room}${location.world},extended,0032BAE0\n`;
				const two = `patch=1,EE,E0${(location.enemies.length + 2)
					.toString(16)
					.padStart(2, "0")
					.toUpperCase()}00${location.event},extended,0032BAE4\n`;
				const three = `patch=1,EE,E0${(location.enemies.length + 1)
					.toString(16)
					.padStart(2, "0")
					.toUpperCase()}00${location.event},extended,0032BAE6\n`;
				const four = `patch=1,EE,E0${location.enemies.length
					.toString(16)
					.padStart(2, "0")
					.toUpperCase()}00${location.event},extended,0032BAE8\n`;

				const content = location.enemies.reduce(
					(prev, curr) =>
						prev +
						createLine(
							curr.value,
							enemySeed.get(curr.enemy.value)!.value,
							false
						) +
						` // ${enemySeed.get(curr.enemy.value)!.name}\n`,
					one + two + three + four
				);

				patches.push(content);
			}
		}

		if (configuration.experimental.bosses === Toggle.ON) {
			const shuffledBosses = [
				...shuffle(
					bosses
						.map(location => location.enemies)
						.reduce((prev, curr) => prev.concat(curr)),
					configuration.name
				),
			];

			for (const location of bosses) {
				const lines = location.enemies.length * 2;

				const one = `patch=1,EE,E0${(lines + 3)
					.toString(16)
					.padStart(2, "0")
					.toUpperCase()}${location.room}${location.world},extended,0032BAE0\n`;
				const two = `patch=1,EE,E0${(lines + 2)
					.toString(16)
					.padStart(2, "0")
					.toUpperCase()}00${location.event},extended,0032BAE4\n`;
				const three = `patch=1,EE,E0${(lines + 1)
					.toString(16)
					.padStart(2, "0")
					.toUpperCase()}00${location.event},extended,0032BAE6\n`;
				const four = `patch=1,EE,E0${lines
					.toString(16)
					.padStart(2, "0")
					.toUpperCase()}00${location.event},extended,0032BAE8\n`;

				const content = location.enemies.reduce((prev, curr) => {
					let enemy: Enemy;

					if (curr.enemy.type === EnemyType.BOSS) {
						enemy = shuffledBosses.shift()!.enemy;
					} else {
						enemy = enemySeed.get(curr.enemy.value)!;
					}

					const modifierAddress = (parseInt(curr.value, 16) + 32).toString(16);
					const modifier =
						enemy.value.length === 6 ? enemy.value.substring(0, 2) : "";

					return (
						prev +
						createLine(curr.value, enemy.value, false) +
						` // ${enemy.name} (was ${curr.enemy.name})\n` +
						createLine(modifierAddress, modifier)
					);
				}, one + two + three + four);

				patches.push(content);
			}
		}
	}

	if (configuration.experimental.superbossRetry === Toggle.ON) {
		patches.push(superbossRetry);
	}

	return seed.reduce((result, item) => {
		return result + createLine(item.location.value, item.reward.value);
	}, patches.join("\n"));
};
