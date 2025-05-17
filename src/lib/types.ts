import type { IconProps } from "phosphor-svelte/lib/shared";
import type { SvelteComponent } from "svelte";

export type Post = {
	title: string;
	slug: string;
	description: string;
	date: string;
	categories: string[];
	published: boolean;
};

export type Work = {
	title: string;
	description: string;
	link: string;
	icon: SvelteComponent<IconProps>;
};

export type LifeEvent = {
	name: string;
	start: Date;
	end: Date;
};

type ValueDescription<T> = {
	value: T;
	description: string | number | (string | number)[];
	id?: number;
	attributes?: {
		[key: string]:
			| string
			| ValueDescription<string | number | (string | number)[]>;
	};
};

type NestedValueDescription = {
	value: {
		[key: string]: ValueDescription<string | number | (string | number)[]>;
	};
	description: string | number | (string | number)[];
	attributes?: {};
};

export type ExifData = {
	"Bits Per Sample"?: ValueDescription<number>;
	"Image Height"?: ValueDescription<number>;
	"Image Width"?: ValueDescription<number>;
	"Color Components"?: ValueDescription<number>;
	Subsampling?: ValueDescription<number[][]>;
	Thumbnail?: {
		Compression?: ValueDescription<number>;
		XResolution?: ValueDescription<number[]>;
		YResolution?: ValueDescription<number[]>;
		ResolutionUnit?: ValueDescription<number>;
		JPEGInterchangeFormat?: ValueDescription<number>;
		JPEGInterchangeFormatLength?: ValueDescription<number>;
		type?: string;
		image?: {};
		base64?: string;
	};
	Make?: ValueDescription<string[]>;
	Model?: ValueDescription<string[]>;
	XResolution?: ValueDescription<number[]>;
	YResolution?: ValueDescription<number[]>;
	ResolutionUnit?: ValueDescription<number>;
	Software?: ValueDescription<string[]>;
	DateTime?: ValueDescription<string[]>;
	Copyright?: ValueDescription<string[]>;
	"Exif IFD Pointer"?: ValueDescription<number>;
	"GPS Info IFD Pointer"?: ValueDescription<number>;
	ExposureTime?: ValueDescription<number[]>;
	FNumber?: ValueDescription<number[]>;
	ExposureProgram?: ValueDescription<number>;
	ISOSpeedRatings?: ValueDescription<number>;
	ExifVersion?: ValueDescription<number[]>;
	DateTimeOriginal?: ValueDescription<string[]>;
	DateTimeDigitized?: ValueDescription<string[]>;
	OffsetTime?: ValueDescription<string[]>;
	OffsetTimeOriginal?: ValueDescription<string[]>;
	OffsetTimeDigitized?: ValueDescription<string[]>;
	ShutterSpeedValue?: ValueDescription<number[]>;
	ApertureValue?: ValueDescription<number[]>;
	BrightnessValue?: ValueDescription<number[]>;
	ExposureBiasValue?: ValueDescription<number[]>;
	MeteringMode?: ValueDescription<number>;
	Flash?: ValueDescription<number>;
	FocalLength?: ValueDescription<number[]>;
	SubjectArea?: ValueDescription<number[]>;
	SubSecTimeOriginal?: ValueDescription<string[]>;
	SubSecTimeDigitized?: ValueDescription<string[]>;
	ColorSpace?: ValueDescription<number>;
	FocalPlaneXResolution?: ValueDescription<number[]>;
	FocalPlaneYResolution?: ValueDescription<number[]>;
	FocalPlaneResolutionUnit?: ValueDescription<number>;
	SensingMethod?: ValueDescription<number>;
	SceneType?: ValueDescription<number>;
	ExposureMode?: ValueDescription<number>;
	WhiteBalance?: ValueDescription<number>;
	FocalLengthIn35mmFilm?: ValueDescription<number>;
	LensSpecification?: ValueDescription<number[][]>;
	LensMake?: ValueDescription<string[]>;
	LensModel?: ValueDescription<string>;
	GPSLatitudeRef?: ValueDescription<string>;
	GPSLatitude?: ValueDescription<number[][]>;
	GPSLongitudeRef?: ValueDescription<string>;
	GPSLongitude?: ValueDescription<number[][]>;
	GPSAltitudeRef?: ValueDescription<number>;
	GPSHPositioningError?: ValueDescription<number[]>;
	"Coded Character Set"?: ValueDescription<number[]>;
	"Record Version"?: ValueDescription<number[]>;
	"Date Created"?: ValueDescription<number[]>;
	"Time Created"?: ValueDescription<number[]>;
	"Digital Creation Date"?: ValueDescription<number[]>;
	"Digital Creation Time"?: ValueDescription<number[]>;
	"Copyright Notice"?: ValueDescription<number[]>;
	about?: ValueDescription<string>;
	CreatorTool?: ValueDescription<string>;
	ModifyDate?: ValueDescription<string>;
	CreateDate?: ValueDescription<string>;
	MetadataDate?: ValueDescription<string>;
	LensInfo?: ValueDescription<string>;
	Lens?: ValueDescription<string>;
	LateralChromaticAberrationCorrectionAlreadyApplied?: ValueDescription<string>;
	VignetteCorrectionAlreadyApplied?: ValueDescription<string>;
	DateCreated?: ValueDescription<string>;
	DocumentID?: ValueDescription<string>;
	OriginalDocumentID?: ValueDescription<string>;
	InstanceID?: ValueDescription<string>;
	format?: ValueDescription<string>;
	DerivedFrom?: NestedValueDescription;
	rights?: {
		value: ValueDescription<string>[];
		description: string;
		attributes: {};
	};
	"Preferred CMM type"?: ValueDescription<string>;
	"Profile Version"?: ValueDescription<string>;
	"Profile/Device class"?: ValueDescription<string>;
	"Color Space"?: ValueDescription<string>;
	"Connection Space"?: ValueDescription<string>;
	"ICC Profile Date"?: ValueDescription<string>;
	"ICC Signature"?: ValueDescription<string>;
	"Primary Platform"?: ValueDescription<string>;
	"Device Manufacturer"?: ValueDescription<string>;
	"Device Model Number"?: ValueDescription<string>;
	"Rendering Intent"?: ValueDescription<number>;
	"Profile Creator"?: ValueDescription<string>;
	"ICC Copyright"?: ValueDescription<string>;
	"ICC Description"?: ValueDescription<string>;
	"ICC Device Manufacturer for Display"?: ValueDescription<string>;
	"ICC Device Model Description"?: ValueDescription<string>;
	"ICC Viewing Conditions Description"?: ValueDescription<string>;
	Technology?: ValueDescription<string>;
	ScaleFactorTo35mmEquivalent?: ValueDescription<number>;
	FieldOfView?: ValueDescription<number>;
	FileType?: ValueDescription<string>;
};
