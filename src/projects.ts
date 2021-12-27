// Here we define the interface for each Project type
// The required fields for a project contains: name, authors, and a description (can be the abstract of the resulting paper).
// Additionally, we can have some optional fields.
// We can also include the link to the source code (e.g., GitHub), the link to the paper (e.g., arXiv),
// and the link to the demo page, if any.
export interface Project {
    name: string;
    authors: string;
    description: string;
    sourceCode?: string;
    paperLink?: string;
    demoPage?: string;
}

// To add a new project to the home page, please edit the following variable by inserting an additional entry.
// The entry needs to have the required fields as described above, otherwise, it will not compile.
// To modify the existing entry, simply modify the content of the string and recompile the project.
// Also, please note here that we enforce a type constraint of each field. Each field should be a single string instead of any other types.
export const projects: Project[] = [
    {
        name: 'Crosslingual Topic Modeling with WikiPDA',
        authors: 'Tiziano Piccardi, Robert West',
        description: `Wikipedia-based Polyglot Dirichlet Allocation (WikiPDA) is a crosslingual topic model that learns to represent Wikipedia articles written in any language as distributions over a common set of language-independent topics. 
        It leverages the fact that Wikipedia articles link to each other and are mapped to concepts in the Wikidata knowledge base, such that, when represented as bags of links, articles are inherently language-independent. 
        WikiPDA works in two steps, by first densifying bags of links using matrix completion and then training a standard monolingual topic model. 
        A human evaluation showed that WikiPDA produces more coherent topics than monolingual text-based LDA, thus offering crosslinguality at no cost. 
        WikiPDA also has the capacity for zero-shot language transfer, where a model is reused for new languages without any fine-tuning.
        `,
        sourceCode: 'https://github.com/epfl-dlab/WikiPDA',
        paperLink: 'https://arxiv.org/abs/2009.11207',
        demoPage: 'http://wikipda.dlab.tools/',
    },
    {
        name: 'Crosslingual Document Embedding as Reduced-Rank Ridge Regression',
        authors:
            'Martin Josifoski, Ivan S. Paskov, Hristo S. Paskov, Martin Jaggi, Robert West',
        description: `There has recently been much interest in extending vector-based word representations to multiple languages, such that words can be compared across languages. 
        In this paper, we shift the focus from words to documents and introduce a method for embedding documents written in any language into a single, language-independent vector space. 
        For training, our approach leverages a multilingual corpus where the same concept is covered in multiple languages (but not necessarily via exact translations), such as Wikipedia. 
        Our method, Cr5 (Crosslingual reduced-rank ridge regression), starts by training a ridge-regression-based classifier that uses language-specific bag-of-word features in order to predict the concept that a given document is about. 
        We show that, when constraining the learned weight matrix to be of low rank, it can be factored to obtain the desired mappings from language-specific bags-of-words to language-independent embeddings. 
        As opposed to most prior methods, which use pretrained monolingual word vectors, postprocess them to make them crosslingual, and finally average word vectors to obtain document vectors, Cr5 is trained end-to-end and is thus natively crosslingual as well as document-level. 
        Moreover, since our algorithm uses the singular value decomposition as its core operation, it is highly scalable. 
        Experiments show that our method achieves state-of-the-art performance on a crosslingual document retrieval task. 
        Finally, although not trained for embedding sentences and words, it also achieves competitive performance on crosslingual sentence and word retrieval tasks.
        `,
        sourceCode: 'https://github.com/epfl-dlab/Cr5',
        paperLink: 'https://arxiv.org/abs/1904.03922',
        demoPage: 'http://testing.dlab.tools/cr5/index.html',
    },
];
