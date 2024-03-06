import { Schema } from "./schema";

// A few useful aliases to Directus' generated Typescript definitions.

export type Association = Schema["association"];
export type AssociationMembership = Schema["association_memberships"][0];
export type AssociationPartner = Schema["association_partners"][0];
export type Commission = Schema["commissions"][0];
export type CommissionMembership = Schema["commission_memberships"][0];
export type Member = Schema["members"][0];
export type News = Schema["news"][0];
export type Partner = Schema["partners"][0];
export type SocialLink = Schema["social_links"][0];
