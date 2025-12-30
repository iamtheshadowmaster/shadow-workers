const backgroundImage = new Proxy({"src":"/_astro/Background-2.DoaEv4wL.png","width":1280,"height":832,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/thomasmaitre/website/src/assets/Background-2.png";
							}
							
							return target[name];
						}
					});

export { backgroundImage as b };
