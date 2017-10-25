�� < #  
 . S Y N O P S I S  
 G e t   S e r v e r   I n f o r m a t i o n  
 . D E S C R I P T I O N  
 T h i s   s c r i p t   w i l l   g e t   t h e   C P U   s p e c i f i c a t i o n s ,   m e m o r y   u s a g e   s t a t i s t i c s ,   a n d   O S   c o n f i g u r a t i o n   o f   a n y   S e r v e r   o r   C o m p u t e r   l i s t e d   i n   S e r v e r l i s t . t x t .  
 . N O T E S      
 T h e   s c r i p t   w i l l   e x e c u t e   t h e   c o m m a n d s   o n   m u l t i p l e   m a c h i n e s   s e q u e n t i a l l y   u s i n g   n o n - c o n c u r r e n t   s e s s i o n s .   T h i s   w i l l   p r o c e s s   a l l   s e r v e r s   f r o m   S e r v e r l i s t . t x t   i n   t h e   l i s t e d   o r d e r .  
 T h e   i n f o   w i l l   b e   e x p o r t e d   t o   a   c s v   f o r m a t .  
 R e q u i r e s :   S e r v e r l i s t . t x t   m u s t   b e   c r e a t e d   i n   t h e   s a m e   f o l d e r   w h e r e   t h e   s c r i p t   i s .  
 F i l e   N a m e     :   G e t - I n v e n t o r y . p s 1  
 A u t h o r :   N i k o l a y   P e t k o v  
 E x t e n s i o n s :   Q D B A  
 h t t p : / / p o w e r - s h e l l . c o m /  
 # >  
  
  
 f u n c t i o n   G e t - M S O f f i c e P r o d u c t K e y   {  
         p a r a m (  
         [ s t r i n g [ ] ] $ c o m p u t e r N a m e   =   " . "  
         )  
  
         $ p r o d u c t   =   @ ( )  
         $ h k l m   =   2 1 4 7 4 8 3 6 5 0  
         $ p a t h   =   " S O F T W A R E \ M i c r o s o f t \ O f f i c e "  
  
         f o r e a c h   ( $ c o m p u t e r   i n   $ c o m p u t e r N a m e )   {  
  
                 $ w m i   =   [ W M I C l a s s ] " \ \ $ c o m p u t e r \ r o o t \ d e f a u l t : s t d R e g P r o v "  
  
                 $ s u b k e y s 1   =   $ w m i . E n u m K e y ( $ h k l m , $ p a t h )  
                 f o r e a c h   ( $ s u b k e y 1   i n   $ s u b k e y s 1 . s n a m e s )   {  
                         $ s u b k e y s 2   =   $ w m i . E n u m K e y ( $ h k l m , " $ p a t h \ $ s u b k e y 1 " )  
                         f o r e a c h   ( $ s u b k e y 2   i n   $ s u b k e y s 2 . s n a m e s )   {  
                                 $ s u b k e y s 3   =   $ w m i . E n u m K e y ( $ h k l m , " $ p a t h \ $ s u b k e y 1 \ $ s u b k e y 2 " )  
                                 f o r e a c h   ( $ s u b k e y 3   i n   $ s u b k e y s 3 . s n a m e s )   {  
                                         $ s u b k e y s 4   =   $ w m i . E n u m V a l u e s ( $ h k l m , " $ p a t h \ $ s u b k e y 1 \ $ s u b k e y 2 \ $ s u b k e y 3 " )  
                                         f o r e a c h   ( $ s u b k e y 4   i n   $ s u b k e y s 4 . s n a m e s )   {  
                                                 i f   ( $ s u b k e y 4   - e q   " d i g i t a l p r o d u c t i d " )   {  
                                                         $ t e m p   =   " "   |   s e l e c t   C o m p u t e r N a m e , P r o d u c t N a m e , P r o d u c t K e y  
                                                         $ t e m p . C o m p u t e r N a m e   =   $ c o m p u t e r  
                                                         $ p r o d u c t N a m e   =   $ w m i . G e t S t r i n g V a l u e ( $ h k l m , " $ p a t h \ $ s u b k e y 1 \ $ s u b k e y 2 \ $ s u b k e y 3 " , " p r o d u c t n a m e " )  
                                                         $ t e m p . P r o d u c t N a m e   =   $ p r o d u c t N a m e . s V a l u e  
  
                                                         $ d a t a   =   $ w m i . G e t B i n a r y V a l u e ( $ h k l m , " $ p a t h \ $ s u b k e y 1 \ $ s u b k e y 2 \ $ s u b k e y 3 " , " d i g i t a l p r o d u c t i d " )  
                                                         $ v a l u e D a t a   =   ( $ d a t a . u V a l u e ) [ 5 2 . . 6 6 ]  
  
                                                         #   d e c r y p t   b a s e 2 4   e n c o d e d   b i n a r y   d a t a    
                                                         $ p r o d u c t K e y   =   " "  
                                                         $ c h a r s   =   " B C D F G H J K M P Q R T V W X Y 2 3 4 6 7 8 9 "  
                                                         f o r   ( $ i   =   2 4 ;   $ i   - g e   0 ;   $ i - - )   {    
                                                                 $ r   =   0    
                                                                 f o r   ( $ j   =   1 4 ;   $ j   - g e   0 ;   $ j - - )   {    
                                                                         $ r   =   ( $ r   *   2 5 6 )   - b x o r   $ v a l u e D a t a [ $ j ]    
                                                                         $ v a l u e D a t a [ $ j ]   =   [ m a t h ] : : T r u n c a t e ( $ r   /   2 4 )  
                                                                         $ r   =   $ r   %   2 4    
                                                                 }    
                                                                 $ p r o d u c t K e y   =   $ c h a r s [ $ r ]   +   $ p r o d u c t K e y    
                                                                 i f   ( ( $ i   %   5 )   - e q   0   - a n d   $ i   - n e   0 )   {    
                                                                         $ p r o d u c t K e y   =   " - "   +   $ p r o d u c t K e y    
                                                                 }    
                                                         }    
                                                         $ t e m p . P r o d u c t K e y   =   $ p r o d u c t K e y  
                                                         $ p r o d u c t   + =   $ t e m p  
                                                 }  
                                         }  
                                 }  
                         }  
                 }  
         }  
         $ p r o d u c t  
 }  
  
  
 e c h o   " # # C o m p u t e r i n f o r m a t i o n "  
 e c h o   " = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = "  
 e c h o   " "  
  
 #   U p d a t e   o u t p u t   b u f f e r   s i z e   t o   5 0 0  
 i f (   $ H o s t   - a n d   $ H o s t . U I   - a n d   $ H o s t . U I . R a w U I   )   {  
     $ r a w U I   =   $ H o s t . U I . R a w U I  
     $ o l d S i z e   =   $ r a w U I . B u f f e r S i z e  
     $ t y p e N a m e   =   $ o l d S i z e . G e t T y p e (   ) . F u l l N a m e  
     $ n e w S i z e   =   N e w - O b j e c t   $ t y p e N a m e   ( 5 0 0 ,   $ o l d S i z e . H e i g h t )  
     $ r a w U I . B u f f e r S i z e   =   $ n e w S i z e  
 }  
  
 e c h o   " - - -   C o m p u t e r   - - - "  
 #   G a t h e r   s o m e   t h i n g s    
 $ C P U I n f o   =   G e t - W m i O b j e c t   W i n 3 2 _ P r o c e s s o r   - C o m p u t e r N a m e   .   # G e t   C P U   I n f o r m a t i o n  
 $ O S I n f o   =   G e t - W m i O b j e c t   W i n 3 2 _ O p e r a t i n g S y s t e m   - C o m p u t e r N a m e   .   # G e t   O S   I n f o r m a t i o n  
 # G e t   M e m o r y   I n f o r m a t i o n .   T h e   d a t a   w i l l   b e   s h o w n   i n   a   t a b l e   a s   M B ,   r o u n d e d   t o   t h e   n e a r e s t   s e c o n d   d e c i m a l .  
 # $ O S T o t a l V i r t u a l M e m o r y   =   [ m a t h ] : : r o u n d ( $ O S I n f o . T o t a l V i r t u a l M e m o r y S i z e   /   1 M B ,   2 )  
 # $ O S T o t a l V i s i b l e M e m o r y   =   [ m a t h ] : : r o u n d ( ( $ O S I n f o . T o t a l V i s i b l e M e m o r y S i z e   /   1 M B ) ,   2 )  
 $ P h y s i c a l M e m o r y   =   G e t - W m i O b j e c t   C I M _ P h y s i c a l M e m o r y   - C o m p u t e r N a m e   .   |   M e a s u r e - O b j e c t   - P r o p e r t y   c a p a c i t y   - S u m   |   %   {   [ M a t h ] : : R o u n d ( ( $ _ . s u m   /   1 G B ) ,   2 )   }  
 $ S y s t e m   =   G e t - W m i O b j e c t   - C l a s s   W i n 3 2 _ C o m p u t e r S y s t e m  
 $ B I O S   =   G e t - W m i O b j e c t   - C l a s s   W i n 3 2 _ B I O S   - C o m p u t e r N a m e   .  
 	  
 #   G e t   W i n d o w s   P r o d u k t k e y  
 $ m a p = " B C D F G H J K M P Q R T V W X Y 2 3 4 6 7 8 9 "  
 $ v a l u e   =   ( g e t - i t e m p r o p e r t y   " H K L M : \ \ S O F T W A R E \ M i c r o s o f t \ W i n d o w s   N T \ C u r r e n t V e r s i o n " ) . d i g i t a l p r o d u c t i d [ 0 x 3 4 . . 0 x 4 2 ]  
 $ O S P r o d u c t K e y   =   " "  
 f o r   ( $ i   =   2 4 ;   $ i   - g e   0 ;   $ i - - )   {  
         $ r   =   0  
         f o r   ( $ j   =   1 4 ;   $ j   - g e   0 ;   $ j - - )   {  
                 $ r   =   ( $ r   *   2 5 6 )   - b x o r   $ v a l u e [ $ j ]  
                 $ v a l u e [ $ j ]   =   [ m a t h ] : : F l o o r ( [ d o u b l e ] ( $ r / 2 4 ) )  
                 $ r   =   $ r   %   2 4  
         }  
         $ O S P r o d u c t K e y   =   $ m a p [ $ r ]   +   $ O S P r o d u c t K e y  
         i f   ( ( $ i   %   5 )   - e q   0   - a n d   $ i   - n e   0 )   {  
                 $ O S P r o d u c t K e y   =   " - "   +   $ O S P r o d u c t K e y  
         }  
 }  
          
  
  
  
 	 $ i n f o O b j e c t   =   N e w - O b j e c t   P S O b j e c t  
 	 # T h e   f o l l o w i n g   a d d   d a t a   t o   t h e   i n f o O b j e c t s . 	  
 	 A d d - M e m b e r   - i n p u t O b j e c t   $ i n f o O b j e c t   - m e m b e r T y p e   N o t e P r o p e r t y   - n a m e   " C o m p u t e r N a m e "   - v a l u e   $ C P U I n f o . S y s t e m N a m e  
         A d d - M e m b e r   - i n p u t O b j e c t   $ i n f o O b j e c t   - m e m b e r T y p e   N o t e P r o p e r t y   - n a m e   " M a n u f a c t u r e r "   - v a l u e   $ S y s t e m . M a n u f a c t u r e r  
         A d d - M e m b e r   - i n p u t O b j e c t   $ i n f o O b j e c t   - m e m b e r T y p e   N o t e P r o p e r t y   - n a m e   " M o d e l "   - v a l u e   $ S y s t e m . M o d e l  
         A d d - M e m b e r   - i n p u t O b j e c t   $ i n f o O b j e c t   - m e m b e r T y p e   N o t e P r o p e r t y   - n a m e   " B I O S   V e r s i o n "   - v a l u e   $ B I O S . S M B I O S B I O S V e r s i o n  
         A d d - M e m b e r   - i n p u t O b j e c t   $ i n f o O b j e c t   - m e m b e r T y p e   N o t e P r o p e r t y   - n a m e   " C o m p u t e r   S / N "   - v a l u e   $ B I O S . S e r i a l N u m b e r  
  
 	 A d d - M e m b e r   - i n p u t O b j e c t   $ i n f o O b j e c t   - m e m b e r T y p e   N o t e P r o p e r t y   - n a m e   " C P U "   - v a l u e   $ C P U I n f o . N a m e  
 	 A d d - M e m b e r   - i n p u t O b j e c t   $ i n f o O b j e c t   - m e m b e r T y p e   N o t e P r o p e r t y   - n a m e   " C P U   M o d e l "   - v a l u e   $ C P U I n f o . D e s c r i p t i o n  
 	 A d d - M e m b e r   - i n p u t O b j e c t   $ i n f o O b j e c t   - m e m b e r T y p e   N o t e P r o p e r t y   - n a m e   " C P U   M a n u f a c t u r e r "   - v a l u e   $ C P U I n f o . M a n u f a c t u r e r  
 	 A d d - M e m b e r   - i n p u t O b j e c t   $ i n f o O b j e c t   - m e m b e r T y p e   N o t e P r o p e r t y   - n a m e   " P h y s i c a l C o r e s "   - v a l u e   $ C P U I n f o . N u m b e r O f C o r e s  
 	 A d d - M e m b e r   - i n p u t O b j e c t   $ i n f o O b j e c t   - m e m b e r T y p e   N o t e P r o p e r t y   - n a m e   " C P U   L 2 C a c h e S i z e "   - v a l u e   $ C P U I n f o . L 2 C a c h e S i z e  
 	 A d d - M e m b e r   - i n p u t O b j e c t   $ i n f o O b j e c t   - m e m b e r T y p e   N o t e P r o p e r t y   - n a m e   " C P U   L 3 C a c h e S i z e "   - v a l u e   $ C P U I n f o . L 3 C a c h e S i z e  
 	 A d d - M e m b e r   - i n p u t O b j e c t   $ i n f o O b j e c t   - m e m b e r T y p e   N o t e P r o p e r t y   - n a m e   " S o c k e t s "   - v a l u e   $ C P U I n f o . S o c k e t D e s i g n a t i o n  
 	 A d d - M e m b e r   - i n p u t O b j e c t   $ i n f o O b j e c t   - m e m b e r T y p e   N o t e P r o p e r t y   - n a m e   " L o g i c a l C o r e s "   - v a l u e   $ C P U I n f o . N u m b e r O f L o g i c a l P r o c e s s o r s  
 	 A d d - M e m b e r   - i n p u t O b j e c t   $ i n f o O b j e c t   - m e m b e r T y p e   N o t e P r o p e r t y   - n a m e   " O S   N a m e "   - v a l u e   $ O S I n f o . C a p t i o n  
 	 A d d - M e m b e r   - i n p u t O b j e c t   $ i n f o O b j e c t   - m e m b e r T y p e   N o t e P r o p e r t y   - n a m e   " O S   V e r s i o n "   - v a l u e   $ O S I n f o . V e r s i o n  
 	 A d d - M e m b e r   - i n p u t O b j e c t   $ i n f o O b j e c t   - m e m b e r T y p e   N o t e P r o p e r t y   - n a m e   " W i n d o w s   P r o d u k t   K e y "   - v a l u e   $ O S P r o d u c t K e y  
 	 A d d - M e m b e r   - i n p u t O b j e c t   $ i n f o O b j e c t   - m e m b e r T y p e   N o t e P r o p e r t y   - n a m e   " T o t a l   P h y s i c a l   M e m o r y   G B "   - v a l u e   $ P h y s i c a l M e m o r y  
 # 	 A d d - M e m b e r   - i n p u t O b j e c t   $ i n f o O b j e c t   - m e m b e r T y p e   N o t e P r o p e r t y   - n a m e   " T o t a l   V i r t u a l   M e m o r y   M B "   - v a l u e   $ O S T o t a l V i r t u a l M e m o r y  
 # 	 A d d - M e m b e r   - i n p u t O b j e c t   $ i n f o O b j e c t   - m e m b e r T y p e   N o t e P r o p e r t y   - n a m e   " T o t a l   V i s a b l e   M e m o r y   M B "   - v a l u e   $ O S T o t a l V i s i b l e M e m o r y  
 	  
         ( $ i n f o O b j e c t | O u t - S t r i n g ) . T r i m ( )  
         e c h o   " "  
  
         e c h o   " - - -   H o t f i x e s   - - - "  
         ( G e t - W m i O b j e c t   - C l a s s   W i n 3 2 _ Q u i c k F i x E n g i n e e r i n g   - C o m p u t e r N a m e   .   | S e l e c t - O b j e c t   D e s c r i p t i o n ,   H o t F i x I D ,   I n s t a l l e d O n   | o u t - s t r i n g ) . T r i m ( )  
         e c h o   " "  
  
         e c h o   " - - -   S o f t w a r e   - - - "  
         ( G e t - I t e m P r o p e r t y   H K L M : \ S o f t w a r e \ M i c r o s o f t \ W i n d o w s \ C u r r e n t V e r s i o n \ U n i n s t a l l \ *   |     S e l e c t - O b j e c t   D i s p l a y N a m e ,   D i s p l a y V e r s i o n ,   P u b l i s h e r ,   I n s t a l l D a t e | O u t - S t r i n g ) . T r i m ( )  
         e c h o   " "  
  
         e c h o   " - - -   U s e r   - - - "  
         G e t - W m i O b j e c t   - C l a s s   W i n 3 2 _ U s e r A c c o u n t   |   S e l e c t - O b j e c t   C a p t i o n , S I D  
         e c h o   " "  
  
  
  
         e c h o   " ` n ` n ` n "  
