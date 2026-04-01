declare module "bcryptjs" {
	type HashCallback = (err: Error | undefined, hash: string) => void;
	type CompareCallback = (err: Error | undefined, same: boolean) => void;

	export function hash(plain: string, saltOrRounds: number | string): Promise<string>;
	export function hash(plain: string, saltOrRounds: number | string, callback: HashCallback): void;

	export function compare(plain: string, hash: string): Promise<boolean>;
	export function compare(plain: string, hash: string, callback: CompareCallback): void;

	const bcrypt: {
		hash: typeof hash;
		compare: typeof compare;
	};

	export default bcrypt;
}

