import Image from "next/image";

import styles from "../styles/ProjectImages.module.css";

export default function ProjectImages({ selectedImage, name, imagesCollection, handleImage, placeholder }){
	return(
		<section className={styles.container}>
			<div className={styles.selectedImage}>
				<Image 
                    src={ selectedImage} 
                    alt={name}
			        layout="fill"
			        objectFit="cover"
			        placeholder="blur"
          			blurDataURL={placeholder}
                />
			</div>
			<div className={styles.imagesCollection}>
				{imagesCollection?.map((img, index) => 

					<div 
						className={`${styles.imagePreview} 
						${selectedImage === img && styles.imgSelected}`}
						key={index}
						onClick={() => handleImage(img)}
					>			
						<Image
			                layout="fill"
			        		objectFit="cover"
			                src={img}
			                alt={name}
			                placeholder="blur"
          					blurDataURL={placeholder}
			              />
					</div>
				)}
			</div>
		</section>
	)
}