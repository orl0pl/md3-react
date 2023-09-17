export const typographySet: ITypographySet = {
	displayLarge: {
		lineHeight: 64,
		fontSize: 57,
		letterSpacing: -0.25,
		fontWeight: 400,
	},
	displayMedium: {
		lineHeight: 52,
		fontSize: 45,
		letterSpacing: 0,
		fontWeight: 400,
	},
	displaySmall: {
		lineHeight: 44,
		fontSize: 36,
		letterSpacing: 0,
		fontWeight: 400,
	},
	headlineLarge: {
		lineHeight: 44,
		fontSize: 36,
		letterSpacing: 0,
		fontWeight: 400,
	},
	headlineMedium: {
		lineHeight: 36,
		fontSize: 28,
		letterSpacing: 0,
		fontWeight: 400,
	},
	headlineSmall: {
		lineHeight: 32,
		fontSize: 24,
		letterSpacing: 0,
		fontWeight: 400,
	},
	titleLarge: {
		lineHeight: 28,
		fontSize: 22,
		letterSpacing: 0,
		fontWeight: 400,
	},
	titleMedium: {
		lineHeight: 24,
		fontSize: 16,
		letterSpacing: 0.15,
		fontWeight: 500,
	},
	titleSmall: {
		lineHeight: 20,
		fontSize: 14,
		letterSpacing: 0.1,
		fontWeight: 500,
	},
	labelLarge: {
		lineHeight: 20,
		fontSize: 14,
		letterSpacing: 0.1,
		fontWeight: 500,
	},
	labelMedium: {
		lineHeight: 16,
		fontSize: 12,
		letterSpacing: 0.5,
		fontWeight: 500,
	},
	labelSmall: {
		lineHeight: 16,
		fontSize: 11,
		letterSpacing: 0.5,
		fontWeight: 500,
	},
	bodyLarge: {
		lineHeight: 24,
		fontSize: 16,
		letterSpacing: 0.5,
		fontWeight: 400,
	},
	bodyMedium: {
		lineHeight: 20,
		fontSize: 14,
		letterSpacing: 0.25,
		fontWeight: 400,
	},
	bodySmall: {
		lineHeight: 16,
		fontSize: 12,
		letterSpacing: 0.4,
		fontWeight: 400,
	},
};

export function textStylesForType(type: TextType) {
	const thisTextTypography = typographySet[type];
	return `
  line-height: ${thisTextTypography.lineHeight}px;
  font-size: ${thisTextTypography.fontSize}px;
  letter-spacing: ${thisTextTypography.letterSpacing}px;
  font-weight: ${thisTextTypography.fontWeight};`;
}

export type TextType =
	| "displayLarge"
	| "displayMedium"
	| "displaySmall"
	| "headlineLarge"
	| "headlineMedium"
	| "headlineSmall"
	| "titleLarge"
	| "titleMedium"
	| "titleSmall"
	| "labelLarge"
	| "labelMedium"
	| "labelSmall"
	| "bodyLarge"
	| "bodyMedium"
	| "bodySmall";

export type ITypographySet = {
	[key in TextType]: {
		lineHeight: number;
		fontSize: number;
		letterSpacing: number;
		fontWeight: number;
	};
};
