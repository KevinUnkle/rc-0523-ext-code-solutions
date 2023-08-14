import Accordion from './Accordion';

const data = [
  {
    header: 'Gandalf',
    id: 1,
    description:
      'A grandfatherly wizard. Gandalf is the first to understand the dangers that Bilbo’s ring poses, and his knowledge sets the whole trilogy in motion. Gandalf selects quiet Frodo to carry the ring and the bumbling Sam to be Frodo’s protector, and these hobbits seem unlikely choices for such a dangerous mission. Here and elsewhere, Gandalf exhibits a remarkable wisdom and insight into hobbits and men alike, and he seems to see potential and ability where others do not. Gandalf is affable, slow, and deliberate, but he is also a skilled fighter. His battles with Saruman and in the mines of Moria are heroic, and the Moria fight in particular provides the others in the fellowship with a model for the sacrifice their quest may require of them. The others assume Gandalf has died in this battle, but he returns, transformed from a gray wizard into a white one. Gandalf is often playful, but he is also deeply concerned about the fate of Middle-earth and always prepared to fight for its safety. At the end of the trilogy, he leaves with Bilbo, Frodo, and the elves for immortal life. Though this wizard seems human, he has always been a little different and a little better than any man could possibly be.',
  },
  {
    header: 'Aragorn',
    id: 2,
    description:
      'The heir to the throne of Gondor. Though Aragorn is the rightful king of Gondor, he travels under an assumed identity at the beginning of the trilogy: he is a ranger, known as Strider. The fact that he is not upon the throne reveals the weak state of the kingdoms of men. As the trilogy proceeds, Aragorn shows himself to be a noble leader with a pure heart. He is relatively unaffected by desire for the ring and routinely throws himself in harm’s way to ensure the fellowship’s survival. In love with the elf princess Arwen, he fights for her survival and for the successful return of the ring to Mordor. He becomes increasingly comfortable asserting his royal identity, but only when he addresses the men of the mountain in The Return of the King does he actually declare himself king of Gondor. By the time he is crowned king at the end of the final film, he has proven himself to be a worthy leader.',
  },
  {
    header: 'Frodo',
    id: 3,
    description:
      'The ring-bearer and protagonist of the trilogy. A young hobbit, Frodo is chosen by the wizard Gandalf to return the ring to Mordor. The ring offers terrible temptation to anyone who comes near it, and though Frodo on occasion succumbs to its power, he generally shows remarkable strength before its siren call. However, when it comes time to drop the ring into Mount Doom, he is unable to simply let the ring go. Only because the ring is torn loose in Frodo’s struggle with Gollum does it fall into the fiery pit of lava below, which suggests that Frodo is a very fallible hero. Unlike the three other hobbits, Sam, Merry, and Pippin, Frodo is unable to readjust to life in the Shire upon his return. In this way, he resembles his uncle Bilbo, a former owner of the ring who is forever restless. The ring has a great effect on Frodo, changing him from an ordinary hobbit of exceptional qualities into someone extraordinary. He becomes a legend and eventually leaves the land of living mortals for immortal life with the elves. Despite Frodo’s success in returning the ring to Mordor, in some ways he is the least memorable character in the trilogy. In three epic films full of battles, he is a reserved, physically small, and ineffective fighter.',
  },
  {
    header: 'Sam',
    id: 4,
    description:
      'Frodo’s best friend and constant companion. If Frodo’s burden is to carry the ring, Sam’s is to carry Frodo, which he literally does as the two finally struggle up Mount Doom. Sam is Frodo’s loyal friend, as committed as Frodo is to returning the ring and keeping the Shire safe. Considering his proximity to the ring, Sam is remarkably immune to its call. Sam himself carries the ring for a short time, and, if necessary, could probably have completed the mission on his own. When the four hobbits return to the Shire at the end of The Return of the King, Sam emerges from Frodo’s shadow. He approaches the woman he’s been dreaming about, and soon they are married. Within little time he is a father of two, with a nice house and garden. Back in the Shire, Frodo suffers, but Sam thrives. Sam is no less pure a soul than Frodo, but his purity is one rooted in his own world, not in a world beyond. His life represents the mortal life lived to the fullest. Immortality holds no charm for him, and he wants nothing more than to thrive in the present.',
  },
  {
    header: 'Legolas',
    id: 5,
    description:
      'A boyish elf. Thanks to Legolas’s skill with a bow and arrow, his kill number is consistently higher than Gimli’s. Like his dwarf friend, he is a brave and loyal member of the fellowship of the ring.',
  },
  {
    header: 'Gimli',
    id: 6,
    description:
      'A bearded, ax-wielding warrior dwarf. Gimli is a brave and loyal member of the fellowship of the ring.',
  },
];

function App() {
  return (
    <div className="App">
      <Accordion data={data} />
    </div>
  );
}

export default App;
