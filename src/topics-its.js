import Topic from "./Topic"

const topics = [
	new Topic(
		"Bell La Padula",
		require('./md-its/bell-la-padula.md'),
	),
	new Topic(
		"Biba",
		require('./md-its/biba.md'),
	),
	new Topic(
		"Low Watermark",
		require('./md-its/low-watermark.md'),
	),
	new Topic(
		"Clark Wilson",
		require('./md-its/clark-wilson.md'),
	),
	new Topic(
		"Brewer Nash",
		require('./md-its/brewer-nash.md'),
	),
	new Topic(
		"RBAC",
		require('./md-its/rbac.md'),
	),
	new Topic(
		"Hierarchical RBAC",
		require('./md-its/hierarchical-rbac.md'),
	),
	new Topic(
		"Trust Management Systems",
		require('./md-its/tms.md'),
	),
	new Topic(
		"Malware",
		require('./md-its/malware.md'),
	),
	new Topic(
		"Virus Phasen",
		require('./md-its/virus-phases.md'),
	),
	new Topic(
		"Infections",
		require('./md-its/infections.md'),
	),
	new Topic(
		"Virus Typen",
		require('./md-its/virus-types.md'),
	),
	new Topic(
		"Wurm Ausbreitung",
		require('./md-its/wurm-ausbreitung.md'),
	),
	new Topic(
		"Bekannte Attacken",
		require('./md-its/known-attacks.md'),
	),
	new Topic(
		"Protokoll Attacken",
		require('./md-its/protocol-attacks.md'),
	),
	new Topic(
		"CIA",
		require('./md-its/cia.md'),
	),
	new Topic(
		"Diffie-Hellman",
		require('./md-its/diffie-hellman.md'),
	),
	new Topic(
		"Hash Funktion",
		require('./md-its/hash.md'),
	),
]

export default topics