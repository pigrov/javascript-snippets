function dbConnect(dbName, version, upgrade) {
	return new Promise((resolve, reject) => {
		const request = indexedDB.open(dbName, version);

		request.onsuccess = (e) => {
			resolve(e.target.result);
		};

		request.onerror = (e) => {
			console.error(`indexedDB error: ${e.target.errorCode}`);
		};

		request.onupgradeneeded = upgrade;
	});
}

const db = {
	get: (x) => {
		return new Promise((resolve, reject) => {
			(async () => {
				const db = await dbConnect('state', 1.0, (e) => {
					const db = e.target.result;
					const store = db.createObjectStore('gens', {
						keyPath: 'id',
					});
				});

				const tx = await db
					.transaction(['gens'], 'readwrite')
					.objectStore('gens');

				tx.get(x.id).onsuccess = (json) => {
					console.log(`get`, json.target.result?.[x.key], json.target.result);
					const current = x.key
						? json.target.result?.[x.key] || x.default || false
						: json.target.result || x.default || false;
					resolve(current);
				};
			})();
		});
	},
	update: (x) => {
		return new Promise((resolve, reject) => {
			(async () => {
				const db = await dbConnect('state', 1.0, (e) => {
					const db = e.target.result;
					const store = db.createObjectStore('gens', {
						keyPath: 'id',
					});
				});

				const tx = await db
					.transaction(['gens'], 'readwrite')
					.objectStore('gens');

				console.log(x);
				tx.get(x.id).onsuccess = (json) => {
					const current = json.target.result || {};
					current[x.key] = x.value;
					tx.put(current);
					resolve(current);
				};
			})();
		});
	},
	use: (x) => {
		return new Promise((resolve, reject) => {
			(async () => {
				const db = await dbConnect('state', 1.0, (e) => {
					const db = e.target.result;
					const store = db.createObjectStore('gens', {
						keyPath: 'id',
					});
				});

				const tx = await db
					.transaction(['gens'], 'readwrite')
					.objectStore('gens');

				tx.get(x.id).onsuccess = (json) => {
					const current = json.target.result || {};

					Object.keys(x).map((key) => {
						current[key] = x[key];
					});

					tx.put({ ...current }).onsuccess = () => {
						resolve(current);
					};
				};
			})();
		});
	},
};
