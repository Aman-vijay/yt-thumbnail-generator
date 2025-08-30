// types/index.ts
export interface GenerationOptions {
  domain: 'tech' | 'gaming' | 'lifestyle' | 'business' |'education' |"travel";
  tone: 'energetic' | 'professional' | 'playful' | 'dramatic';
  style: 'minimalist' | 'bold' | 'colorful' | 'dark';
  targetAudience?: 'teens' | 'adults' | 'professionals';
}

export interface GenerationRequest {
  options: GenerationOptions;
  prompt?: string;
  imageFile?: File;
}

export interface GenerationJob {
  id: string;
  userId: string;
  status: 'queued' | 'processing' | 'completed' | 'failed';
  options: GenerationOptions;
  prompt?: string;
  enhancedPrompt?: string;
  userImageUrl?: string;
  results?: ThumbnailResult[];
  error?: string;
  createdAt: Date;
  completedAt?: Date;
}

export interface ThumbnailResult {
  id: string;
  url: string;
  variant: 'standard' | 'bold' | 'minimal';
  downloadUrl: string;
  metadata?: {
    width: number;
    height: number;
    format: string;
  };
}