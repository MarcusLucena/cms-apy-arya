import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class PlatformDatum {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  siteTitle: string;

  @Column()
  siteDescription: string;

  @Column()
  siteKeywords: string;

  @Column()
  siteLogo: string;

  @Column()
  siteFavicon: string;

  @Column()
  siteUrl: string;

  @Column()
  siteEmail: string;

  @Column()
  sitePhone: string;

  @Column()
  siteAddress: string;

  @Column()
  siteFacebook: string;

  @Column()
  siteTwitter: string;

  @Column()
  siteInstagram: string;

  @Column()
  siteLinkedin: string;

  @Column()
  sitePinterest: string;

  @Column()
  siteYoutube: string;

  @Column()
  siteWhatsapp: string;

  @Column()
  siteTelegram: string;
}
