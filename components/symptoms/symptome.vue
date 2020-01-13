<script>
function concat(...args) {
  return args.reduce((acc, val) => [...acc, ...val]);
}
export default {
  data: () => {
    return {
      symptome: [
        {
          id: "rueckenschmerzen",
          title: "Rückenschmerzen"
        },
        {
          id: "haltungsbedingte_verspannungen",
          title: "Haltungsbedingten Verspannungen"
        },
        {
          id: "kopfschmerzen",
          title: "Kopfschmerzen"
        },
        {
          id: "schwindel",
          title: "Schwindel"
        },
        {
          id: "lymphoedem",
          title: "Lymphödem"
        },
        {
          id: "belastung",
          title: "Über- und Fehlbelastung"
        },
        {
          id: "stress",
          title: "Stress"
        },
        {
          id: "cervikalsyndrom",
          title: "Cervikalsyndrom"
        },
        {
          id: "lumbalgie",
          title: "Lumbalgie"
        },
        {
          id: "skoliose",
          title: "Skoliose"
        }
      ]
    };
  },
  computed: {
    symptome_chunks: function() {
      if (this.showMore) {
      return [concat(this.symptome.slice(0, this.elementsPerRow-1), [{type: 'showMore', id:'', title:''}])]
      }
      return this.symptome.reduce(
        (acc, _, i) =>
          i % this.elementsPerRow
            ? acc
            : [...acc, this.symptome.slice(i, i + this.elementsPerRow)],
        []
      );
    }
  },
  props: {
    elementsPerRow: {
      type: Number,
      default: 5
    },
    showMore: {
      type: Boolean,
      default: false
    }
  }
};
</script>