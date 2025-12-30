const shadowIcon = new Proxy({"src":"/_astro/128x128.BiTnd7hZ.png","width":128,"height":128,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/thomasmaitre/website/src/assets/128x128.png";
							}
							
							return target[name];
						}
					});

const notionIcon = new Proxy({"src":"/_astro/notion.BFgTobOm.png","width":2048,"height":2048,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/thomasmaitre/website/src/assets/notion.png";
							}
							
							return target[name];
						}
					});

export { notionIcon as n, shadowIcon as s };
