export default interface ILongLat {
    longitude: number;
    latitude: number;
}

export class LongLat implements ILongLat {
    public constructor(
        public readonly longitude: number,
        public readonly latitude: number
    ) {}
}
