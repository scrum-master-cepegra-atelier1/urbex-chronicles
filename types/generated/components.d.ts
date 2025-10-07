import type { Schema, Struct } from '@strapi/strapi';

export interface AccessibilityAccessibilities extends Struct.ComponentSchema {
  collectionName: 'components_accessibility_accessibilities';
  info: {
    displayName: 'accessibilities';
  };
  attributes: {
    name: Schema.Attribute.String;
  };
}

export interface AchievementAchievement extends Struct.ComponentSchema {
  collectionName: 'components_achievement_achievements';
  info: {
    displayName: 'Achievement';
  };
  attributes: {
    badge: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String;
    xp: Schema.Attribute.BigInteger;
  };
}

export interface AdressAddress extends Struct.ComponentSchema {
  collectionName: 'components_adress_addresses';
  info: {
    displayName: 'Address';
  };
  attributes: {
    city: Schema.Attribute.String;
    region: Schema.Attribute.String;
    zip: Schema.Attribute.String;
  };
}

export interface CircuitCircuit extends Struct.ComponentSchema {
  collectionName: 'components_circuit_circuits';
  info: {
    displayName: 'Circuit';
  };
  attributes: {
    address: Schema.Attribute.Component<'adress.address', false>;
    media: Schema.Attribute.Component<'media.media', false>;
    name: Schema.Attribute.String;
  };
}

export interface CommentComment extends Struct.ComponentSchema {
  collectionName: 'components_comment_comments';
  info: {
    displayName: 'Comment';
  };
  attributes: {
    avatar: Schema.Attribute.Media<'images'>;
    comment_at: Schema.Attribute.DateTime;
    content: Schema.Attribute.Text;
    user_name: Schema.Attribute.String;
  };
}

export interface MediaMedia extends Struct.ComponentSchema {
  collectionName: 'components_media_media';
  info: {
    displayName: 'Media';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    song: Schema.Attribute.Media<'audios', true>;
    video: Schema.Attribute.Media<'videos'>;
  };
}

export interface MissionMission extends Struct.ComponentSchema {
  collectionName: 'components_mission_missions';
  info: {
    displayName: 'Mission';
  };
  attributes: {
    achievements: Schema.Attribute.Component<'achievement.achievement', true>;
    description: Schema.Attribute.Text;
    latitude: Schema.Attribute.Decimal;
    longitude: Schema.Attribute.Decimal;
    media: Schema.Attribute.Component<'media.media', false>;
    threshold: Schema.Attribute.BigInteger;
    title: Schema.Attribute.String;
    types: Schema.Attribute.Component<'type.type', true>;
  };
}

export interface TypeType extends Struct.ComponentSchema {
  collectionName: 'components_type_types';
  info: {
    displayName: 'Type';
  };
  attributes: {
    name: Schema.Attribute.String;
    typeOf: Schema.Attribute.Enumeration<['text', 'sphere', 'sound']> &
      Schema.Attribute.DefaultTo<'text'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'accessibility.accessibilities': AccessibilityAccessibilities;
      'achievement.achievement': AchievementAchievement;
      'adress.address': AdressAddress;
      'circuit.circuit': CircuitCircuit;
      'comment.comment': CommentComment;
      'media.media': MediaMedia;
      'mission.mission': MissionMission;
      'type.type': TypeType;
    }
  }
}
