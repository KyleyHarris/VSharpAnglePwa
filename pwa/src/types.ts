export interface SteelEntry {
  name: string;
  CrC?: number;
  CrV?: number; // original code used CrCV column label sometimes
  MC?: number;
  M6C?: number;
  MN?: number;
  CrN?: number;
  Fe3C?: number; // original Fe3C6 label normalized
}

export interface EdgeRetentionInputs extends SteelEntry {
  hardness?: number; // HRC
  edgeAngle?: number; // inclusive angle
}

export interface EdgeRetentionResult {
  TCC: number;
  volume: number;
  stability: string;
}

export interface PassCountResult {
  total: number;
  xStrokes?: number;
  sequence: number[];
}

export interface SteelSelectedDetail {
  name: string;
  hardness: number;
  edgeAngle: number;
  carbides: Required<
    Pick<SteelEntry, "CrC" | "CrV" | "MC" | "M6C" | "MN" | "CrN" | "Fe3C">
  >;
}
